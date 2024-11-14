//4)procedures
step1:create procedure in sqlplus
code:

create or replace procedure findSum(num1 in int,num2 in int,res out int) as
  begin
  res:=num1+num2;
  end;
/

step2:commit(not necessary)
code:commit

jdbc_code:


package jdbc;
import java.sql.*;
class procedureJDBC{
	public static void main(String args[]) {
		try {
			  Class.forName("oracle.jdbc.driver.OracleDriver");
			  Connection conn=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","system","cvr1234");
			  CallableStatement stmt=conn.prepareCall(" call findSum(?,?,?)");
			  stmt.setInt(1,1);
			  stmt.setInt(2, 2);
			  stmt.registerOutParameter(3,Types.INTEGER);
			  stmt.execute();
			  System.out.println("The sum is:"+stmt.getInt(3));
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
