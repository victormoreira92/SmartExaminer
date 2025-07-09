# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string
#  name                   :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    context 'when valid' do
      it 'all attributes filled' do
        expect { create(:user) }.to change(described_class, :count).by(1)
      end
    end

    context 'when invalid' do
      it 'without name' do
        user = build(:user, name: nil)
        user.valid?
        expect(user.errors[:name]).to include(I18n.t('errors.messages.blank'))

      end

      it 'without email' do
        user = build(:user, email: nil)
        user.valid?
        expect(user.errors[:email]).to include(I18n.t('errors.messages.blank'))
      end

      it 'without password' do
        user = build(:user, password: nil)
        user.valid?
        expect(user.errors[:password]).to include(I18n.t('errors.messages.blank'))
      end

      it 'without password confirmation' do
        user = build(:user, password: '123456', password_confirmation: nil)
        user.valid?
        expect(user.errors[:password_confirmation]).to include(I18n.t('errors.messages.blank'))
      end

      it "password confirmation and password doesn't match" do
        user = build(:user, password: '123456', password_confirmation: '123459')
        user.valid?
        expect(user.errors[:password_confirmation]).to include(I18n.t('errors.messages.match'))
      end
    end
  end
end
