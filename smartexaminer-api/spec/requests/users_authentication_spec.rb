require 'rails_helper'

RSpec.describe "Authentication", type: :request do
  describe "sign_up" do
    context "with valid arguments" do
      it "creates a new user" do
        user = build(:user)
        post sign_up_smartexaminer_v1_user_tokens_path, params: {name: user.name,
                                                email: user.email,
                                                password: user.password,
                                                password_confirmation: user.password_confirmation},
             as: :json
        expect(response).to be_successful
      end
    end
    context "with missing arguments" do
      %w[ name password password_confirmation email ].each do |argument|
        it "without #{argument}" do
          user = build(:user, argument => nil)
          post sign_up_smartexaminer_v1_user_tokens_path, params: {name: user.name,
                                                  email: user.email,
                                                  password: user.password,
                                                  password_confirmation: user.password_confirmation},
               as: :json
          expect(response).to have_http_status(:unprocessable_entity)
          expect(JSON.parse(response.body)["error_description"]).to include("#{argument.titlecase} can't be blank")

        end
      end
    end
  end

  describe "sign_in" do
    context "with valid arguments" do
      it "signs in the user" do
        user = create(:user)
        post sign_in_smartexaminer_v1_user_tokens_path, params: {
          email: user.email,
          password: user.password
        }, as: :json
        expect(response).to be_successful
      end
    end
    context "with invalid arguments" do
      it "incorrect password" do
        user = create(:user)
        post sign_in_smartexaminer_v1_user_tokens_path, params: {
          email: user.email,
          password: "111111111111"
        }, as: :json
        expect(response).to have_http_status(:unauthorized)
        expect(JSON.parse(response.body)["error_description"]).to include(I18n.t("devise.api.error_response.invalid_authentication"))
      end
      it "incorrect email" do
          user = create(:user)
          post sign_in_smartexaminer_v1_user_tokens_path, params: {
            email: "email@email.com",
            password: user.password
          }, as: :json
          expect(response).to have_http_status(:bad_request)
          expect(JSON.parse(response.body)["error_description"]).to include(I18n.t("devise.api.error_response.invalid_email"))
      end
    end
  end
end
