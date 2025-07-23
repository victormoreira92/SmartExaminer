module Smartexaminer
  module V1
    class QuestionsController < ApplicationController
      before_action :set_question, only: %i[ show update destroy ]

      # GET /questions
      def index
        @questions = Question.all

        render json: @questions.order(created_at: :desc)
                               .as_json(include: :alternatives)
      end

      def enums_question
        render json: Question.type_answers.map { |key, value| [value, key.humanize.titleize] }
      end

      # GET /questions/1
      def show
        render json: @question.as_json(include: :answers)
      end

      # POST /questions
      def create
        @question = Question.new(question_params)
        if @question.save
          render json: {
            question: @question.as_json(include: :answers),
            message: I18n.t('activerecord.messages.created', model: Question.model_name.human)
          }, status: :created
        else
          render json: {
            error: {
              messages: @question.errors.full_messages
            }
          }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /questions/1
      def update
        if @question.update(question_params)
          render json: {
            question: @question.as_json(include: :answers),
            message: I18n.t('activerecord.messages.updated', model: Question.model_name.human)
          }, status: :ok
        else
          render json: {
            error: {
              messages: @question.errors.full_messages
            }
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
            error: {
              messages: @question.errors.full_messages
            }
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
            :content,
            :score,
            :feedback_correct,
            :feedback_incorrect,
            :type_answer,
            alternatives_attributes: %i[content is_correct alternative_order _destroy]
          )
        end
    end
  end
end
