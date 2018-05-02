<?php
/**
 * Created by IntelliJ IDEA.
 * User: kavii
 * Date: 4/26/2018
 * Time: 1:14 PM
 */
class Register extends CI_Controller{

	public function __construct()
	{
	parent::__construct();
		$this->load->model('signUp_model');
	}

	public function insert()
	{
		$target_dir = "C:\xampp\htdocs\play\backEnd\AREP\Uploads/";
		$target_file = $target_dir . basename($_FILES["selectFile"]["name"]);
		$uploadOK = 1;
		if (file_exists($target_file)) {
			echo "Sorry,File already exits";
			$uploadOK = 0;
		}
		if ($uploadOK == 0) {
			echo "Sorry";
		} else {
			$password = $_POST['userPassword'];
			if (move_uploaded_file($_FILES['selectFile']["tmp_name"], $target_file)) {
				$result = $this->signUp_model->insert([
					'userName' => $_POST['userName'],
					'userEmail' => $_POST['userEmail'],
					'userPassword' => hash('sha256', $password . mylink),
//					'adminprofilepicture' => $target_file,
				]);
				echo $result;
			} else {
				echo "Sorry,Try Again";
			}
		}
	}
}

