package sec03.exam01;

public class Arr2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] scores;
		scores = new int[] {83,90,87};
		int sum1 = 0;
		for(int i=0; i<3; i++){
			sum1 += scores[i];
		}
		System.out.println(sum1);
	}
		
		public static int add(int[] scores) {
			int sum = 0;
			for(int i=0; i<3; i++) {
				sum += scores[i];
			}
			return sum;
		}
	}

