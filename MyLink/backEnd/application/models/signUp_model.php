<?php
/**
 * Created by IntelliJ IDEA.
 * User: kavii
 * Date: 5/1/2018
 * Time: 6:18 PM
 */
class signUp_model extends CI_Model{
	public function insert($data)
	{
		$this->db->insert('sign', $data);
		return $this->db->affected_rows();
	}
	// public function newSign($data)
	// {
	// 	$this->db->insert('newAdmin', $data);
	// 	return $this->db->affected_rows();
	// }
	public function findUser($UserName)
	{
		$this->db->select('userId');
		$query = $this->db->get_where('sign', ['UserName' => $UserName]);
		$uid = null;
		foreach ($query->result() as $row) {
			$uid = $row->userId;
		}

		return $uid;
	}

}
