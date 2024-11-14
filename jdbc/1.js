//1.select in jdbc

package jdbc;
import java.sql.*;
class select{
	public static void main(String args[]) {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection conn= DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","system","cvr1234");
			Statement stmt=conn.createStatement();
			ResultSet rs=stmt.executeQuery("select * from student");
			while(rs.next()) {
				System.out.println(rs.getString(1)+" "+rs.getInt(2)+" "+rs.getString(3));	
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
