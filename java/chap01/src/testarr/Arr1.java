package testarr;

public class Arr1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int [][] mathScores = new int[2][3];
		for(int i=0; i<mathScores.length; i++) {
			for(int k=0; k<mathScores[i].length; k++) {
				System.out.println(mathScores[i][k]);
			}
		}
		System.out.println();
		int[][] engScores = new int[2][];
		engScores[0] = new int[2];
		
		engScores[1] = new int[3];
		for(int i=0; i<engScores.length; i++) {
			for(int k =0; k<engScores.length; k++) {
				System.out.println(engScores[i][k]);
			}
		}
		System.out.println();
		
		int[][] javaS = {{95 , 80} , {92 , 96 , 80} }
		
		
	}
}
