class QuestionsController < ApplicationController
  before_action :get_exam
  before_action :get_question, only: [:show, :edit, :update, :destroy]

  def index
    @questions = @exam.questions
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def get_exam
    @exam = Exam.find(params[:exam_id])
  end
end
