package Feb21;

import java.util.*;

public class HowManyTimeLeft {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calendar now = Calendar.getInstance();
		int year = now.get(Calendar.YEAR);
		int month = now.get(Calendar.MONTH);
		int day = now.get(Calendar.DAY_OF_MONTH);
		int hour = now.get(Calendar.HOUR) + 12;
		int minute = now.get(Calendar.MINUTE);
		int second = now.get(Calendar.SECOND);
		
		int timeH = (24 - hour);
		int timeM = (60 - minute);
		int timeS = (60 - second);
		
		Calendar lastDay = Calendar.getInstance();
		Date last = new Date();
		lastDay.set(2025, Calendar.DECEMBER, 31);
		int lastYear = lastDay.get(Calendar.YEAR);
		int lastMonth = lastDay.get(Calendar.MONTH);
		int lastD = lastDay.get(Calendar.DAY_OF_MONTH);
		int lastHour = 24;
		int lastMinute = 00;
		int lastSecond = 00;
	
		System.out.println("마지막 날 까지.. " );
		System.out.println((lastYear-year)+ "년");
		System.out.println((lastMonth-month)+ "달");
		System.out.println((lastD-day)+ "일");
		System.out.println((timeH)+ "시");
		System.out.println((timeM)+ "분");
		System.out.println((timeS)+ "초");
		System.out.println("남았습니다!!!!!");
	}
	

}
