package chap14;
import java.io.FileWriter;
import java.io.Writer;
public class WriteExample2 {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		Writer writer = new FileWriter("C:/temp/test10.txt");
		
		String str = "ABC";
		
		writer.write(str);
		
		writer.flush();
		writer.close();
	}

}
