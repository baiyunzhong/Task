package com.jnshu.task7.interceptor;

import com.jnshu.task7.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginInterceptor implements HandlerInterceptor {

    @Autowired
    LoginService loginService;

    Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);

    @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        //拦截器拦截未登陆用户访问/u/profession页面
        String loginName = (String) request.getSession().getAttribute("loginName");
        logger.info("loginName = " + loginName);
        //session中有数据,则正常访问
        if (loginName != null ){
            return true;
        }
        //session中没有数据,前台输出信息,返回到login页面
        request.setAttribute("message","未登录,请登陆");
        //重定向到/login页面,
        request.getRequestDispatcher("/login").forward(request,response);

        return false;
    }
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable Exception ex) throws Exception {

    }
}
