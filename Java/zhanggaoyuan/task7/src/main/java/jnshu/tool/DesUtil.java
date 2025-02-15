package jnshu.tool;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import java.io.IOException;
import java.security.SecureRandom;

//DES加密工具类
//用法，加密调用encrypt（）方法，传入一个String类型，返回加密后的String类型
//解密调用decrypt（）方法，传入加密的String类型，返回解密后的String类型
public class DesUtil {

    private final static String DES = "DES";

    //    自定义key
    private final static String key = "zgyshiagoodman";


    public static void main(String[] args) throws Exception {
        long t = System.currentTimeMillis ();
        System.out.println (t);
        String r = String.valueOf (t);
        String data = r;//加密内容
        System.err.println (encrypt (data));
        System.err.println (decrypt (encrypt (data)));
    }

    /**
     * Description 根据键值进行加密
     *
     * @param data //     * @param key  加密键byte数组
     * @return
     * @throws Exception
     */
    public static String encrypt(String data) throws Exception {
        byte[] bt = encrypt (data.getBytes (), key.getBytes ());
        String strs = new BASE64Encoder ().encode (bt);
        return strs;
    }

    /**
     * Description 根据键值进行解密
     *
     * @param data //     *   加密键byte数组
     * @return
     * @throws IOException
     * @throws Exception
     */
    public static String decrypt(String data) throws IOException,
            Exception {
        if (data == null)
            return null;
        BASE64Decoder decoder = new BASE64Decoder ();
        byte[] buf = decoder.decodeBuffer (data);
        byte[] bt = decrypt (buf, key.getBytes ());
        return new String (bt);
    }

    /**
     * Description 根据键值进行加密
     *
     * @param data
     * @param key  加密键byte数组
     * @return
     * @throws Exception
     */
    private static byte[] encrypt(byte[] data, byte[] key) throws Exception {
        // 生成一个可信任的随机数源
        SecureRandom sr = new SecureRandom ();

        // 从原始密钥数据创建DESKeySpec对象
        DESKeySpec dks = new DESKeySpec (key);

        // 创建一个密钥工厂，然后用它把DESKeySpec转换成SecretKey对象
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance (DES);
        SecretKey securekey = keyFactory.generateSecret (dks);

        // Cipher对象实际完成加密操作
        Cipher cipher = Cipher.getInstance (DES);

        // 用密钥初始化Cipher对象
        cipher.init (Cipher.ENCRYPT_MODE, securekey, sr);

        return cipher.doFinal (data);
    }

    /**
     * Description 根据键值进行解密
     *
     * @param data
     * @param key  加密键byte数组
     * @return
     * @throws Exception
     */
    private static byte[] decrypt(byte[] data, byte[] key) throws Exception {
        // 生成一个可信任的随机数源
        SecureRandom sr = new SecureRandom ();

        // 从原始密钥数据创建DESKeySpec对象
        DESKeySpec dks = new DESKeySpec (key);

        // 创建一个密钥工厂，然后用它把DESKeySpec转换成SecretKey对象
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance (DES);
        SecretKey securekey = keyFactory.generateSecret (dks);

        // Cipher对象实际完成解密操作
        Cipher cipher = Cipher.getInstance (DES);

        // 用密钥初始化Cipher对象
        cipher.init (Cipher.DECRYPT_MODE, securekey, sr);

        return cipher.doFinal (data);
    }
}
