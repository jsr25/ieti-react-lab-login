import {Link
} from "react-router-dom";
function Login() {
    return (
        <div id="principallogin">
            <h1>Login</h1>
            <div class="container">
                <div class="row">
                    <div class="col-6 col-sm-6">Username</div>
                    <div class="col-6 col-sm-6">Password</div>

                    <div class="w-100"></div>

                    <div class="col-6 col-sm-6">
                        <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping"></span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    </div>
                    <div class="col-6 col-sm-6"><div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping"></span>
                        <input type="Password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" />
                    </div>
                    </div>
                </div>

                <div class="w-100"></div>

                <Link  class="btn btn-outline-dark" to="/">Submit</Link>         

            </div>




        </div>
    )
}
export default Login;

