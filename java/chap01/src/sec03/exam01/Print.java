package sec03.exam01;

public class Print {
	public static void main(String[] args) {
		int value = 123;
		System.out.printf("상품의 가격 : %d월\n" , value);
		System.out.printf("상품의 가격 : %6d월\n" , value);
		System.out.printf("삼품의 가격 : %-6d원\n" , value);
		System.out.printf("삼품의 가격 : %06d원\n" , value);
		
		double area = 3.141592 * 10 * 10;
		System.out.printf("반지름이 %d인 원의 넓이:%10.2f/n",10,area);
	}
}
