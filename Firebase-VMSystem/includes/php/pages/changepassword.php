<style>
#changeerror{
    text-align: center;
    display: none;
}
.changepassword-wrapper{
    margin-top: -25px;
}

</style>
<div class="changepassword-wrapper">
        <div class="row justify-content-center">
            <div class="col-md-4 mt-5">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>Change Password</h4>
                    </div>
                    <div class="card-body">
                        <form class="row justify-content-center" id="changePassword">
                            <div class="alert alert-danger col-md-10" role="alert" id="changeerror">
                                Can't change password. Try again!
                            </div>
                            <div class="form-group mb-4 col-md-10">
                                <label for="">Current Password</label>
                                <input type="text" name="currentpassword" class="form-control" id="currentpassword" required placeholder="Enter current password">
                            </div>

                            <div class="form-group mb-4 col-md-10">
                                <label for="">New Password</label>
                                <input type="password" name="newpassword" class="form-control" id="newpassword" required placeholder="Enter new password">
                            </div>

                            <div class="form-group mb-4 col-md-10">
                                <label for="">Confirm Password</label>
                                <input type="password" name="confirmpassword" class="form-control" id="confirmpassword" required placeholder="Enter confirm password">
                            </div>

                            <div class="form-group mb-3 text-center">
                                <button type="reset" name="reset" class="btn btn-secondary" id="reset" onclick="resetChangeError()">Reset</button>
                                <button type="button" name="ChangePassword" class="btn btn-success" id="ChangePassword" onclick="changePassword()">Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</div><!--changepassword-wrapper-->