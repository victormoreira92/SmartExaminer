class QuestionsController < ApplicationController
  before_action :get_exam
  before_action :get_question, only: [:edit, :update, :destroy]

  def index
    @questions = @exam.questions
  end

  def new
    @question = @exam.questions.build
  end

  def create
    @question = @exam.questions.build(question_params)

    respond_to do |format|
     if @post.save  
        flash.now[:success] = "Question created"
        format.html { redirect_to shark_posts_path(@shark), notice: 'Post was successfully created.' }
     else
      flash.now[:error] = @question.errors.full_messages
      format.html { render :new, status: :unprocessable_entity }
  end
end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @question.update(question_params)
        format.html { redirect_to exam_questions_url, notice: "Question was successfully updated." }
        format.json { render :show, status: :ok, location: @question }
      else
        flash.now[:error] = @question.errors.full_messages
        format.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @question.destroy

    respond_to do |format|
      format.html { redirect_to exam_questions_url, notice: "Question was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
  def get_exam
    @exam = Exam.find(params[:exam_id])
  end

  def get_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:feedback, :alternatives,:points,:type_question, :question, :correct_answer, :type_question)
  end
end
