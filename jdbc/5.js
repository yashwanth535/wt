//5)database METADATA

package jdbc;
import java.sql.*;

class metaDataJDBC{
	public static void main(String args[]) {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection conn=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","system","cvr1234");
			DatabaseMetaData data=conn.getMetaData();
			System.out.println(data.getDatabaseProductName());
			System.out.println(data.getDatabaseProductVersion());
			System.out.println(data.getDriverName());
			System.out.println(data.getDriverVersion());
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
