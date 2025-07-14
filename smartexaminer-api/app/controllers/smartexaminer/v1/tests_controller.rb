module Smartexaminer
  module V1
    class TestsController < ApplicationController
      before_action :set_test, only: %i[ show update destroy ]

      # GET /tests
      def index
        @tests = Test.all

        render json: @tests.as_json(include: :categories)
      end

      # GET /tests/1
      def show
        render json: @test
      end

      # POST /tests
      def create
        @test = Test.new(test_params)

        if @test.save
          render json: {
            test: @test,
            message: I18n.t('activerecord.messages.created', model: Test.model_name.human)
          }, status: :created
        else
          render json: {
                   messages: @test.errors.full_messages
          }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /tests/1
      def update
        if @test.update(test_params)
          render json: {
            test: @test,
            message: I18n.t('activerecord.messages.updated', model: Test.model_name.human)
          }, status: :ok
        else
          render json: {
            messages: @test.errors.full_messages
          }, status: :unprocessable_entity
        end
      end

      # DELETE /tests/1
      def destroy
        @test.destroy
      end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_test
        @test = Test.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def test_params
        params.require(:test).permit(:title, :description, :status_test, :category_ids)
      end
    end
  end
end
