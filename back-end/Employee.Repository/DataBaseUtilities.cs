using Microsoft.Data.SqlClient;
using System.Data;

namespace Employee.Repository
{
    public class DataBaseUtilities
    {
        private SqlConnection _connection;

        private string connectionString = "Server=localhost\\SQLEXPRESS;Database=EmpTrackProDB;Trusted_Connection=True;";


        public void openConnection()
        {
            if (connectionString == null)
            {
                _connection = new SqlConnection(connectionString);
            }

            if(_connection.State != ConnectionState.Open)
            {
                _connection.Open();
            }
        }

        public void closeConnection()
        {
            if(_connection != null && _connection.State != ConnectionState.Closed)
            {
                _connection.Close();
            }
        }

    }
}
