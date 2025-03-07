package sec01.exam02;

import sec02.exam01.Car;

public class ClassExample {

	public static void main(String[] args) throws Exception{
		// TODO Auto-generated method stub
		//첫번쨰
//		Class clazz = Car.class;

		//두번째
		Class clazz = Class.forName("sec01.exam02.Car");
		
		//
//		Car car = new Car();
//		Class clazz = car.getClass();
//	
		
		System.out.println(clazz.getName());
		System.out.println(clazz.getSimpleName());
		System.out.println(clazz.getPackage().getName());
	}

}
