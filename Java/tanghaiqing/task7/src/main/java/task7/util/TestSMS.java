package task7.util;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.*;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import org.apache.log4j.Logger;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TestSMS {
    private static Logger logger = Logger.getLogger(TestSMS.accessKeyId);
    //产品名称:云通信短信API产品,开发者无需替换
    private static String number =randomNumber();
    private static final String product = "Dysmsapi";
    //产品域名,开发者无需替换
    private static final String domain = "dysmsapi.aliyuncs.com";
    // TODO 此处需要替换成开发者自己的AK(在阿里云访问控制台寻找)
    private static final String accessKeyId = "LTAIYJkbrR5aHKIX";
    private static final String accessKeySecret = "NPfctvHtPjIfS0f3Z5F1YgM3lHK4ut";

    public static SendSmsResponse sendSms(String phone) {
        logger.info("进入：sendSms()");
        //可自助调整超时时间

        System.setProperty("sun.net.client.defaultConnectTimeout", "10000");
        System.setProperty("sun.net.client.defaultReadTimeout", "10000");

        //初始化acsClient,暂不支持region化
        SendSmsResponse sendSmsResponse = null;
        IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou", accessKeyId, accessKeySecret);
        try {
            DefaultProfile.addEndpoint("cn-hangzhou", "cn-hangzhou", product, domain);
            IAcsClient acsClient = new DefaultAcsClient(profile);

            //组装请求对象-具体描述见控制台-文档部分内容
            SendSmsRequest request = new SendSmsRequest();
            //必填:待发送手机号
            request.setPhoneNumbers(phone);
            //必填:短信签名-可在短信控制台中找到
            request.setSignName("技能树");
            //必填:短信模板-可在短信控制台中找到
            request.setTemplateCode("SMS_150182612");
            //可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时,此处的值为
            request.setTemplateParam("{\"number\":\""+number+"\"}");
            //选填-上行短信扩展码(无特殊需求用户请忽略此字段)
            //request.setSmsUpExtendCode("90997");
            //可选:outId为提供给业务方扩展字段,最终在短信回执消息中将此值带回给调用者
            //request.setOutId("yourOutId");

            //hint 此处可能会抛出异常，注意catch
            sendSmsResponse = acsClient.getAcsResponse(request);
        } catch (ClientException e) {
            logger.error("初始化acsClient错误");
            e.printStackTrace();
        }
        return sendSmsResponse;
    }

    public static QuerySendDetailsResponse querySendDetails(String bizId) {
        logger.info("进入：querySendDetailsResponse()");
        //可自助调整超时时间
        System.setProperty("sun.net.client.defaultConnectTimeout", "10000");
        System.setProperty("sun.net.client.defaultReadTimeout", "10000");
        QuerySendDetailsResponse querySendDetailsResponse = null;
        try {
            //初始化acsClient,暂不支持region化
            IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou", accessKeyId, accessKeySecret);
            DefaultProfile.addEndpoint("cn-hangzhou", "cn-hangzhou", product, domain);
            IAcsClient acsClient = new DefaultAcsClient(profile);
            //组装请求对象
            QuerySendDetailsRequest request = new QuerySendDetailsRequest();
            //必填-号码
            request.setPhoneNumber("17688432366");
            //可选-流水号
            request.setBizId(bizId);
            //必填-发送日期 支持30天内记录查询，格式yyyyMMdd
            SimpleDateFormat ft = new SimpleDateFormat("yyyyMMdd");
            request.setSendDate(ft.format(new Date()));
            //必填-页大小
            request.setPageSize(10L);
            //必填-当前页码从1开始计数
            request.setCurrentPage(1L);
            //hint 此处可能会抛出异常，注意catch
            querySendDetailsResponse = acsClient.getAcsResponse(request);
        } catch (ClientException e) {
            logger.error("初始化acsClient错误");
            e.printStackTrace();
        }
        return querySendDetailsResponse;
    }
    private static String randomNumber(){
        int i =(int)((Math.random()*9+1)*100000);
        return Integer.toString(i);
    }

    public static void main(String[] args) throws InterruptedException {
        System.out.println(TestSMS.number);
        //发短信
        SendSmsResponse response = sendSms("17688432366");
        TestSMS.sendSms("17688432366").getMessage();
        System.out.println("短信接口返回的数据----------------");
        System.out.println("Code=" + response.getCode());
        System.out.println("Message=" + response.getMessage());
        System.out.println("RequestId=" + response.getRequestId());
        System.out.println("BizId=" + response.getBizId());

        Thread.sleep(3000L);

        //查明细
        if (response.getCode() != null && response.getCode().equals("OK")) {
            QuerySendDetailsResponse querySendDetailsResponse = querySendDetails(response.getBizId());
            System.out.println("短信明细查询接口返回数据----------------");
            System.out.println("Code=" + querySendDetailsResponse.getCode());
            System.out.println("Message=" + querySendDetailsResponse.getMessage());
            int i = 0;
            for (QuerySendDetailsResponse.SmsSendDetailDTO smsSendDetailDTO : querySendDetailsResponse.getSmsSendDetailDTOs()) {
                System.out.println("SmsSendDetailDTO[" + i + "]:");
                System.out.println("Content=" + smsSendDetailDTO.getContent());
                System.out.println("ErrCode=" + smsSendDetailDTO.getErrCode());
                System.out.println("OutId=" + smsSendDetailDTO.getOutId());
                System.out.println("PhoneNum=" + smsSendDetailDTO.getPhoneNum());
                System.out.println("ReceiveDate=" + smsSendDetailDTO.getReceiveDate());
                System.out.println("SendDate=" + smsSendDetailDTO.getSendDate());
                System.out.println("SendStatus=" + smsSendDetailDTO.getSendStatus());
                System.out.println("Template=" + smsSendDetailDTO.getTemplateCode());
            }
            System.out.println("TotalCount=" + querySendDetailsResponse.getTotalCount());
            System.out.println("RequestId=" + querySendDetailsResponse.getRequestId());
        }

    }
}


