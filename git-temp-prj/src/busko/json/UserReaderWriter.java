package busko.json;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class UserReaderWriter
{

	public UserReaderWriter()
	{
	}

	/**
	 * "c:\\user.yml"
	 */
	public List<User> read_users(String file_name)
	{
		try
		{
			InputStream input = new FileInputStream(file_name);
			return new ObjectMapper().readValue(input, new TypeReference<List<User>>() {
			});
		} catch (FileNotFoundException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return Collections.emptyList();
	}

	/**
	 * "c:\\staff.yml"
	 */
	public boolean write_users(String file_name, List<User> users)
	{
		ObjectMapper mapper = new ObjectMapper();
		try
		{
			mapper.writerWithDefaultPrettyPrinter().writeValue(new File(file_name), users);
			return true;
		} catch (JsonGenerationException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return false;
	}
}
