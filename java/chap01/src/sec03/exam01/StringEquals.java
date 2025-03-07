package sec03.exam01;

public class StringEquals {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = "신민철";
		String str2 = "신민철";
		if(str1 == str2) {
			System.out.println("str1 str2 참조 같음");
		}else {
			System.out.println("str1 , str2 참조다름");
		}
		
		if(str1.equals(str2)) {
			System.out.println("str1 , str2 is same 문자열");
		}
		
		String str3 = new String("조밍");
		String str4 = new String("조밈");
		
		if(str3 == str4) {
			System.out.println("same 참조");
		}else {
			System.out.println("diffrent 참조");
		}
		
		if(str3.equals(str4)) {
			System.out.println(" str4, str 3 문자열 같음");
		}
	}

}
