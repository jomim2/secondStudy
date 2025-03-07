package sec03.exam01;

public class Supersonic extends Airplane{
	public static final int NOMAL = 1;
	public static final int SUPER = 2;
	public int flyMode = NOMAL;
	
	public void fly() {
		if(flyMode == SUPER) {
			System.out.println("초음속비행입니다");
		}else {
			super.fly();
		}
	}
}
