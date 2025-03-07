package tel;
import java.util.*;

public class Tel {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Telinfo> list = new Vector<Telinfo>();
		list.add(new Telinfo("이정임" ,"010-4636-8403"));
		list.add(new Telinfo("비누" , "010-1234-5678"));
		list.add(new Telinfo("미미" , "010-9999-8888"));
		list.add(new Telinfo("조미미" , "010-0000-5678"));
		list.add(new Telinfo("또미미" , "010-9999-1324"));
		System.out.println("현재 전화번호부에 있는 사람 이름");			
		for(int i=0; i<list.size(); i++) {
			Telinfo telinfo = list.get(i);
			System.out.println( telinfo.name + "\t");
		}
		Scanner scanner = new Scanner(System.in);
		String inputData;
		
		inputData = scanner.nextLine();
		
//		boolean contains(inputData)
//		String str = list.get(inputData);
		System.out.println(inputData);
		for(int i=0; i<list.size(); i++) {
			Telinfo telinfo = list.get(i);		
			if(telinfo.name.equals(inputData)) {
				System.out.println(telinfo.telnum);
			}
		}
	}
	
}
