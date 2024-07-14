require 'rails_helper'

RSpec.describe "Questions", type: :request do
  let!(:exam){create(:exam)}
  let!(:question){create(:question, exam: exam)}

  describe "GET /index" do
    it "returns http success" do
      question
      get exam_questions_path(question.exam.id)
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /new" do
    it "returns http success" do
      get new_exam_question_path(exam.id)
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get exam_questions_path(exam.id)
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /edit" do
    it "returns http success" do
      get "/questions/edit"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/questions/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/questions/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
