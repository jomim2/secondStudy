package sec03.exam01;

public class Hang {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] arr1 = new int[][]{
				{1,2,3,4},
				{1,2,3,4},
				{1,2,3,4}
				};
		int[][] arr2 = new int[][] {
				{1,2,3},
				{1,2,3},
				{1,2,3},
				{1,2,3}
				};
		int[][] arr3 = new int[3][3];
		
		for(int i=0; i<arr1.length; i++) {
			for(int j = 0; j<arr2[i].length; j++) {
				for(int k = 0; k<arr2.length; k++) {
					arr3[i][j] += arr1[i][k] * arr2[k][j];
				}
			}
		}
		System.out.println(arr3);
		for(int i=0; i<arr3.length; i++) {
			for(int j=0; j<arr3[i].length; j++) {
				System.out.println(arr3[i][j]);
			}
		}
	}
}
