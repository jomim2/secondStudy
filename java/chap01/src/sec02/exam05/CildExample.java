package sec02.exam05;

public class CildExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Parent parent = new Child();
		parent.field1 = "data1";
		parent.method1();
		parent.method2();
		
		Child child = (Child) parent;
		child.field2 = "yyy";
		child.method3();
	}

}
