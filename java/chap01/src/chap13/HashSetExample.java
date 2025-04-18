package chap13;
import java.util.*;
public class HashSetExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Set<String> set = new HashSet<>();
		
		set.add("Java");
		set.add("JDBC");
		set.add("Servlet");
		set.add("Java");
		set.add("iBATIS");
		
		int size = set.size();
		
		System.out.println("총 객체 수 "+size);
		
		Iterator<String> iterator = set.iterator();
		while(iterator.hasNext()) {
			String element = iterator.next();
			System.out.println("\t" + element);
			}
		set.remove("JDBC");
		set.remove("iBATIS");
		
		System.out.println("총 객체수 : " + set.size());
		
		iterator = set.iterator();
		for(String element : set) {
			System.out.println("\t" + element);
		}
		set.clear();
		if(set.isEmpty()) {
			System.out.println("비어있음");
		}
	}

}
