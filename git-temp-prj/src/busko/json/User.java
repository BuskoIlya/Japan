package busko.json;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class User
{
	public final String id;
	public final String nick_name;
	public final String name;
	public final String birth_day;

	@JsonCreator
	public User(@JsonProperty("id") String id, @JsonProperty("nick_name") String nick_name,
	   @JsonProperty("name") String name, @JsonProperty("birth_day") String birth_day)
	{
		this.id = id;
		this.nick_name = nick_name;
		this.name = name;
		this.birth_day = birth_day;
	}
}
