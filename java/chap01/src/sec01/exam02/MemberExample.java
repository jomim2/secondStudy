package sec01.exam02;

public class MemberExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Member obj1 = new Member("blue");
		Member obj2 = new Member("blue");
		Member obj3 = new Member("red");
		
		if(obj1.equals(obj2)) {
			System.out.println("obj1 and obj2 is same");
		}else {
			System.out.println("obj1 and obj2 is diffrent");
		}
		
		if(obj1.equals(obj3)) {
			System.out.println("obj1 and obj3 is same");
		}else {
			System.out.println("obj1 and obj3 is diffrent");
		}
	}
}
