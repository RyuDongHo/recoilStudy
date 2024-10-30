import signupService from "./api/signupService";

const SignUpPage = () =>{
  return(
    <div>
      <form method="post" onSubmit={() => {signupService()}}>
        id<input type="text" />
        password<input type="password" />
      </form>
    </div>
  )
}

export default SignUpPage;