import NavBar from '../components/navbar';
import MyFooter from '../components/footer';

// mt-3                     margin top 3 [can be 1,2,3,4,5]
// row                      split into 12 pieces horizontally   1|2|3|...|11|12
// justify-content-center   put the content in the middle horizontally
// col-md-7                 if viewport is size medium, take up 7 parts of 12
// col-lg-5                 if viewport is size large, take up 5 parts of 12
function LoginPage() {
    return (
        <>
            <NavBar />
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-7 col-lg-5'>
                        <div className='card'>
                            <img className='card-img-top' src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' alt='card-cap' style={{'height':200, 'object-fit':'cover'}} />
                            <div className='card-body p-4 p-md-5'>
                                <h1 className='mb-5'>Login</h1>
                                <form>
                                    <div className='form-group mt-3'>
                                        <label for='email1'>Email</label>
                                        <input type='email' className='form-control' id='email1' placeholder='Enter email'></input>
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label for='password1'>Password</label>
                                        <input type='password' className='form-control' id='password1' placeholder='Enter password'></input>
                                    </div>
                                    <button type='submit' className='btn btn-primary mt-4'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </>
    )
}
export default LoginPage;