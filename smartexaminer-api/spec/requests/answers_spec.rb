require 'rails_helper'

RSpec.describe "Answers", type: :request do
  let!(:question) { create(:question) }
  let!(:question_valid) { build(:question) }
  let!(:answers) { create_list(:answer, 5) }
  let!(:answer) { build(:answer, question: question) }
  let!(:valid_attributes) do
    {
      content: "What is the capital of France?",
      type_question: "single_choice",
      score: 5,
      answers_attributes: [
        { answer_content: "Lisbon", correct: false },
        { answer_content: "Berlin", correct: false },
        { answer_content: "Madrid", correct: false },
        { answer_content: "Paris", correct: true }
      ]
    }
  end
  let!(:invalid_attributes) do
    {
      content: "What is the capital of France?",
      type_question: "single_choice",
      score: 5,
      answers_attributes: [
        { answer_content: "", correct: false },
        { answer_content: "", correct: false },
        { answer_content: "", correct: false },
        { answer_content: "", correct: true }
      ]
    }
  end


  describe "GET /questions" do
    it "renders a successful response" do
      token = login_user
      get questions_url, headers: token, as: :json
      expect(response).to be_successful
    end

    it "renders all answers of questions" do
      question.answers << answers
      token = login_user
      get questions_url, headers: token, as: :json
      expect(response.body).to include(question.answers[0].answer_content)
    end
  end

  describe "POST /questions/:id" do
    context "with valid parameters" do
      it "creates a new answer" do
        token = login_user
        post questions_url,
             params: {question: valid_attributes }, headers: token, as: :json
        expect(response).to be_successful
      end
    end

    context 'with invalid parameters' do
      it "answer_content blank with status 422" do
        token = login_user
        post questions_url,
             params: {question: invalid_attributes }, headers: token, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "answer_content blank message" do
        token = login_user
        post questions_url,
             params: {question: invalid_attributes }, headers: token, as: :json
        expect(JSON.parse(response.body[ "messages"])).to include("can't be blank")
      end
    end

    describe "PUT /questions/:id" do
      let(:question_with_answer) do
        question << answers
      end
      let!(:answer_atributes) do
        { id: question.id,
          answers_attributes: [
            { id: answers[0].id, answer_content: "Lisbon", correct: false },
          ]
        }
      end
      context "with valid parameters" do
        it "updates the requested answer" do
          question.answers << answers
          token = login_user
          patch question_url(question),
               params: {question: answer_atributes}, headers: token, as: :json
          expect(response).to have_http_status(:success)
          response_body = JSON.parse(response.body)
          expect(response_body["question"]["answers"]).to include(a_hash_including(answer_atributes[:answers_attributes][0].stringify_keys))
        end
      end
    end
  end
end