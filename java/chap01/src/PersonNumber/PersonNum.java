package PersonNumber;

import java.util.Scanner;

public class PersonNum {
	public static void main(String [] args){
		Scanner scanner = new Scanner(System.in);
		System.out.println("주민번호를 입력하세요");
		String[] inputV =  scanner.nextLine().split("");
//		int inV = Integer.parseInt(inputV);
		
		int[] haveN = new int[13];
//		for(int i=0; i<haveN.length; i++) {
//			
//		}
		int[] multiN = new int[] {2,3,4,5,6,7,8,9,2,3,4,5};
		int[] result1 = new int[12];
		for(int i=0; i<multiN.length; i++) {
//			System.out.println(hi);
			System.out.println(multiN[i] * Integer.parseInt(inputV[i]));
		}
//		System.out.println(result1);
		
	}	
}
