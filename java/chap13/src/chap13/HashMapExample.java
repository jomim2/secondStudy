package chap13;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;


public class HashMapExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Map 컬렉션 생성
		Map<String , Integer> map = new HashMap<>();
		// 객체 저장
		map.put("신용권" , 85);
		map.put("홍길동" , 90);
		map.put("동장군", 80);
		map.put("홍길동", 95);
		System.out.println(" 총 Entry 수:" + map.size());
		
		//객체 찾기
		System.out.println("\t 홍길동 : " + map.get("홍길동"));
		System.out.println();
		
		//객체를 하나씩 처리
		Set<String> keySet = map.keySet();
		Iterator<String> KeyIterator = keySet.iterator();
		
		while(KeyIterator.hasNext()) {
			String key = KeyIterator.next();
			Integer value = map.get(key);
			System.out.println("\t"+ key + ":" + value);
			
		}
		System.out.println();
		
		//객체 삭제
		map.remove("홍길동");
		System.out.println("총 Entry 수" + map.size());
		
		//객체를 하나씩 처리
		Set<Map.Entry<String , Integer>> entrySet = map.entrySet();
		Iterator<Map.Entry<String,Integer>> entryIterator = entrySet.iterator();
		
		while(entryIterator.hasNext()) {
			Map.Entry<String , Integer> entry = entryIterator.next();
			String key = entry.getKey();
			Integer value = entry.getValue();
			System.out.println("\t" + key + ":" + value);
			
		}
		System.out.println();
		//객체 전체 삭제
		map.clear();
		System.out.println("총 Entry 수 :" + map.size());
		
		
	}

}
