# spec/support/request_spec_helper.rb
module RequestSpecHelper
  def login_user(user = create(:user))
    post sign_in_smartexaminer_v1_user_tokens_path, params: {
      email: user.email,
      password: user.password
    }, as: :json
    {
      'Authorization' => "Bearer #{JSON.parse(response.body)["token"]}",
      'Content-Type' => 'application/json'
    }
  end
end
