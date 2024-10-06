class QuestionsController < ApplicationController
  before_action :set_question, only: %i[ show update destroy ]

  # GET /questions
  def index
    @questions = Question.all

    render json: @questions
  end

  # GET /questions/1
  def show
    render json: @question
  end

  # POST /questions
  def create
    @question = Question.new(question_params)
    @question.content = params[:question][:content] unless params[:question][:content][:body].blank?

    if @question.save
      render json: {
        question: @question,
        message: I18n.t('activerecord.messages.created', model: Question.model_name.human)
      }, status: :created
    else
      render json: {
        messages: @question.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /questions/1
  def update
    if @question.update(question_params)
      render json: {
        question: @question,
        message: I18n.t('activerecord.messages.updated', model: Question.model_name.human)
      }, status: :ok
    else
      render json: {
        messages: @question.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  # DELETE /questions/1
  def destroy
    if @question.destroy
      render json: {
        message: I18n.t('activerecord.messages.deleted', model: Question.model_name.human)
      },status: :ok
    else
      render json: {
        message: @question.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def question_params
      params.require(:question).permit(
        :score,
        :feedback_correct,
        :feedback_incorrect,
        content: [:id, :name, :body, :record_type, :record_id, :created_at, :updated_at],
        answer: [:id, :answer_content, :correct]
      )
    end
end
