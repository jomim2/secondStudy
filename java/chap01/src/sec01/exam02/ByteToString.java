package sec01.exam02;

public class ByteToString {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		byte[] bytes = {72 , 101 , 108 , 111 , 32 ,  74 , 97 , 118 ,97};
		
		String str1 = new String(bytes);
		System.out.println(str1);
		
		String str2 = new String(bytes , 6 ,4);
		System.out.println(str2);
		
	}

}
