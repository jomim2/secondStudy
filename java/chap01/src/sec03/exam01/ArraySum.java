package sec03.exam01;

public class ArraySum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] scores = {83, 90 ,87};
		System.out.println(scores[0]);
		System.out.println(scores[1]);
		System.out.println(scores[2]);
		
		int sum =0;
		for(int i=0; i<3; i++ ) {
				sum += scores[i]; 
		}
		
		System.out.println("합계 : "+ sum);
		double avg = (double) sum / 3;
		System.out.println("평균 : "+ avg);

	}

}


