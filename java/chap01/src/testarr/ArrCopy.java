package testarr;

public class ArrCopy {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] oldS = {"java" , "arr" , "copy"};
		String[] newS = new String[5];
		System.arraycopy(oldS ,0 ,newS , 0 ,oldS.length);
		
		for(int i=0; i<newS.length ; i++) {
			System.out.println(newS);
		}
	}

}
