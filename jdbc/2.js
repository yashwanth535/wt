//2.INSERT,UPDATE,DELETE

package jdbc;
import java.sql.*;

public class Insert {
	public static void main(String args[]) {
		try {
		 Class.forName("oracle.jdbc.driver.OracleDriver");
		 Connection conn=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","system","cvr1234");
		 Statement stmt=conn.createStatement();
		 
		 stmt.executeUpdate("insert into department values(50,'raju','raghu')");
		 ResultSet rs=stmt.executeQuery("select * from department");
		 while(rs.next()) {
			 System.out.println(rs.getString(1)+" "+rs.getString(2)+" "+rs.getString(3));
		 }
		 stmt.executeUpdate("update department set D_NAME='ramu' where DEPTNO=50");
		 rs=stmt.executeQuery("select * from department");
		 while(rs.next()) {
			 System.out.println(rs.getString(1)+" "+rs.getString(2)+" "+rs.getString(3));
		 }
		 
		 
		 stmt.executeUpdate("delete from department where deptno=50");
		 rs=stmt.executeQuery("select * from department");
		 while(rs.next()) {
			 System.out.println(rs.getString(1)+" "+rs.getString(2)+" "+rs.getString(3));
		 }
		 
		 
	}
		catch(Exception e) {
			e.printStackTrace();
		}
}
}
