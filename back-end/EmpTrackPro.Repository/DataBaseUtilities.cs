using Microsoft.Data.SqlClient;
using System.Data;

namespace EmpTrackPro.Repository
{
    public class DataBaseUtilities
    {
        private SqlConnection _connection;

        private string connectionString = "Server=localhost\\SQLEXPRESS;Database=EmpTrackProDB;Trusted_Connection=True;Encrypt=False;";


        public void openConnection()
        {
            if (_connection == null)
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

        public DataTable Select(string storedProcedure, SqlParameter[] parameters = null)
        {
            using (SqlCommand cmd = new SqlCommand(storedProcedure, _connection))
            {
                cmd.CommandType = CommandType.StoredProcedure;

                if (parameters != null)
                    cmd.Parameters.AddRange(parameters);

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataTable table = new DataTable();
                da.Fill(table);

                return table;
            }
        }

        public DataSet SelectDataSet(string storedProcedure, SqlParameter[] parameters = null)
        {
            using (SqlCommand cmd = new SqlCommand(storedProcedure, _connection))
            {
                cmd.CommandType = CommandType.StoredProcedure;

                if (parameters != null)
                    cmd.Parameters.AddRange(parameters);

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                da.Fill(ds);

                return ds;
            }
        }

        public int PopulateData(string storedProcedure, SqlParameter[] parameters)
        {
            using (SqlCommand cmd = new SqlCommand(storedProcedure, _connection))
            {
                cmd.CommandType = CommandType.StoredProcedure;

                if (parameters != null)
                    cmd.Parameters.AddRange(parameters);

                return cmd.ExecuteNonQuery(); 
            }
        }

        public int Delete(string storedProcedure, SqlParameter[] parameters)
        {
            using (SqlCommand cmd = new SqlCommand(storedProcedure, _connection))
            {
                cmd.CommandType = CommandType.StoredProcedure;

                if (parameters != null)
                    cmd.Parameters.AddRange(parameters);

                return cmd.ExecuteNonQuery();
            }
        }

    }
}
