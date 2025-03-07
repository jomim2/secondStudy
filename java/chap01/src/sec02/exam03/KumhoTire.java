package sec02.exam03;

public class KumhoTire extends Tire{
	public KumhoTire(String location , int maxRotation) {
		//필드
		//생성자
		super(location, maxRotation);
	}
	//메소드
		@Override
		public boolean roll() {
			++accmulatedRotation;
			if(accmulatedRotation<maxRotation) {
				System.out.println(location + "금호타이어 수명 : "+ (maxRotation-accmulatedRotation)+"회");
				return true;
			}else {
				System.out.println("***" + location + "금호타이어 팡쿠");
				return false;
			}
		}
	}