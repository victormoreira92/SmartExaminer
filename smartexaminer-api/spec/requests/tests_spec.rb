require 'rails_helper'


RSpec.describe "/tests", type: :request do
  let(:test) { build(:test) }
  let(:test_without_title) { build(:test, title: nil) }
  let(:new_attributes) { build(:test) }
  let(:token) { login_user }

  describe 'GET /index' do
    before do
      2.times { create(:test) }
    end

    it 'renders a successful response' do
      token = login_user
      get smartexaminer_v1_tests_url, headers: token, as: :json
      expect(response).to be_successful
    end

    it 'return all test created' do
      token = login_user
      get smartexaminer_v1_tests_url, headers: token, as: :json
      expect(JSON.parse(response.body).count).to eq(2)
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      token = login_user
      test = create(:test)
      get smartexaminer_v1_test_url(test), headers: token,  as: :json
      expect(response).to be_successful
    end

    it "confirms the returned test matches the created record" do
      token = login_user
      test = create(:test)
      get smartexaminer_v1_test_url(test), headers: token,  as: :json
      %w[id title description].each do |attribute|
        expect(JSON.parse(response.body)[attribute]).to eq(test.send(attribute))
      end
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Test" do
        token = login_user
        expect { post smartexaminer_v1_tests_url, params: { test: test }, headers: token, as: :json }.to \
          change(Test, :count).by(1)
      end

      it "renders a JSON response with the new quiz" do
        token = login_user
        post smartexaminer_v1_tests_url,
              params: { test: test }, headers: token, as: :json
        expect(response).to have_http_status(:created)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "renders status unprocessable_entity" do
        token = login_user
        post smartexaminer_v1_tests_url,
              params: { test: test_without_title }, headers: token, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "title blank" do
        token = login_user
        post smartexaminer_v1_tests_url,
              params: { test: test_without_title },
              headers: token, as: :json
        expect(JSON.parse(response.body)["messages"]).to include("Title can't be blank")
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      it " access update return status success" do
        token = login_user
        test = create(:test)
        patch smartexaminer_v1_test_url(test),
              params: { test: new_attributes }, headers: token, as: :json
        expect(response).to have_http_status(:success)
      end

      it "updates the requested test" do
        token = login_user
        test = create(:test)
        patch smartexaminer_v1_test_url(test),
              params: { test: new_attributes }, headers: token, as: :json
        expect(JSON.parse(response.body)["test"]["title"]).to eq(new_attributes[:title])
      end
    end
    context "with invalid parameters" do
      it "renders status unprocessable_entity" do
        token = login_user
        test = create(:test)
        patch smartexaminer_v1_test_url(test),
              params: { test: test_without_title }, headers: token, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "title blank" do
        token = login_user
        test = create(:test)
        patch smartexaminer_v1_test_url(test),

              params: { test: test_without_title },
              headers: token, as: :json
        expect(JSON.parse(response.body)["messages"]).to include("Title can't be blank")
      end
    end
  end

  describe 'DELETE /destroy' do
    it 'destroys the requested test' do
      test = create(:test)
      expect {
        delete smartexaminer_v1_test_url(test), headers: token, as: :json
      }.to change(Test, :count).by(-1)
    end
  end
end
