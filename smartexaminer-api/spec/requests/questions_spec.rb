require 'rails_helper'

RSpec.describe "/questions", type: :request do

  let(:question) { build(:question) }
  let(:question_without_content) { build(:question, content: nil) }
  let(:new_attributes) { build(:question) }

  describe "GET /index" do
    before do
      questions = 2.times { create(:question) }
    end
    it "renders a successful response" do
      token = login_user
      get questions_url, headers: token, as: :json
      expect(response).to be_successful
    end

    it "return all question created" do
      token = login_user
      get questions_url, headers: token, as: :json
      expect(JSON.parse(response.body).count).to eq(2)
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      token = login_user
      question = create(:question)
      get question_url(question), headers: token,  as: :json
      expect(response).to be_successful
    end

    it "confirms the returned quiz matches the created record" do
      token = login_user
      question = create(:question)
      get question_url(question), headers: token,  as: :json
      %w[score feedback_correct feedback_incorrect].each do |attribute|
        expect(JSON.parse(response.body)[attribute]).to eq(question.send(attribute))
      end
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Question" do
        token = login_user
        expect {
          post questions_url,
               params: { question: question }, headers: token, as: :json
        }.to change(Question, :count).by(1)
      end

      it "renders a JSON response with the new question" do
        question = build(:question)
        token = login_user
        post questions_url,
             params: { question: question }, headers: token, as: :json
        expect(response).to have_http_status(:created)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "renders status unprocessable_entity" do
        token = login_user
        post questions_url,
             params: { question: question_without_content }, headers: token, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "content blank" do
        token = login_user
        post questions_url,
             params: { question: question_without_content }, headers: token, as: :json
        expect(JSON.parse(response.body)["messages"]).to include("Content can't be blank")
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      it "updates the requested question" do
        token = login_user
        question = create(:question)
        patch question_url(question),
              params: { question: new_attributes }, headers: token, as: :json
        expect(response).to have_http_status(:success)
      end

      it "renders a JSON response with the question" do
        token = login_user
        question = create(:question)
        patch questions_url(question),
              params: { question: new_attributes }, headers: token, as: :json
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "renders a JSON response with errors for the question" do
        token = login_user
        question = create(:question)
        patch question_url(question),
              params: { question: question_without_content }, headers: token, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested question" do
      token = login_user
      question = create(:question)
      expect {
        delete question_url(question), headers: token, as: :json
      }.to change(Question, :count).by(-1)
    end
  end
end
