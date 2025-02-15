package cn.wyq.util;

import sun.misc.BASE64Encoder;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

import static org.apache.commons.codec.digest.DigestUtils.md5Hex;

public class MD5Util {
    public static String addSalt(){
        Random random = new Random();
        StringBuilder stringBuilder = new StringBuilder(16);
        stringBuilder.append(random.nextInt(99999999)).append(random.nextInt(99999999));
        int len = stringBuilder.length();
        if(len<16){
            for(int i = 0; i<16-len;i++){
                stringBuilder.append("0");
            }
        }
        String salt = stringBuilder.toString();
        return salt;
    }

    public static String genetate(String data,String salt){
        data = md5Hex(data+salt);
        return data;
    }
}
