//6)resultSet METADATA

package jdbc;
import java.sql.*;

public class ResultSetMetaData {
	public static void main(String args[]) {
		 ResultSet rs = null;
		try {
			   Class.forName("oracle.jdbc.driver.OracleDriver");
			   Connection conn=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","system","cvr1234");
			   Statement stmt=conn.createStatement();
			   rs=stmt.executeQuery("select * from department");
			   java.sql.ResultSetMetaData data=rs.getMetaData();
			   int count=data.getColumnCount();
			   for(int i=1;i<=count;i++) {
				   System.out.print("  column name:"+data.getColumnName(i));
				   System.out.print("  Column type:"+data.getColumnType(i));
				   System.out.print("  Column type name:"+data.getColumnTypeName(i));
				   System.out.println("");
			   }
			   
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

}
