<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class TelegramService
{
    protected $botToken;

    public function __construct()
    {
        $this->botToken = env('TELEGRAM_BOT_TOKEN');
    }

    public function sendMessage($chatId, $message)
    {
        if (!$this->botToken) {
            \Log::error('TELEGRAM_BOT_TOKEN is missing');
            return false;
        }

        $url = "https://api.telegram.org/bot{$this->botToken}/sendMessage";

        try {
            $response = Http::post($url, [
                'chat_id' => $chatId,
                'text' => $message,
                'parse_mode' => 'HTML',
            ]);

            if ($response->successful()) {
                return true;
            }

            \Log::error('Telegram API error', ['response' => $response->body()]);
            return false;
        } catch (\Exception $e) {
            \Log::error('Telegram request failed: ' . $e->getMessage());
            return false;
        }
    }
}