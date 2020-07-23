/*
import { Injectable } from '@angular/core';

@Injectable()
*/
export class Shared {

  public static translations = {
    EN: {
      header: {
        menu: {
          item_1: "Home",
          item_2: "Notes",
        },
        lang: [{
            name: "English",
            code: "EN"
          },
          {
            name: "Russian",
            code: "RU"
          }
        ]
      },
      body: {
        title: "Notes",
        alert: "No record found!",
        loading: "Loading..."
      },
      fields: {
        num: "Number",
        uid: "required, unique",
        title: "Title",
        note: "Note"
      },
      btn: {
        btn_add: "Add",
        btn_edit: "Edit",
        btn_del: "Delete",
        btn_go_back: "Go back",
        btn_cancel: "Cancel",
        btn_save: "Save"
      }
    },
    RU: {
      header: {
        menu: {
          item_1: "Главная",
          item_2: "Заметки",
        },
        lang: [{
            name: "Английский",
            code: "EN"
          },
          {
            name: "Русский",
            code: "RU"
          }
        ]
      },
      body: {
        title: "Заметки",
        alert: "Запись не найдена!",
        loading: "Загрузка..."
      },
      fields: {
        num: "Номер",
        uid: "Обязательное, уникальное",
        title: "Название",
        note: "Заметка"
      },
      btn: {
        btn_add: "Добавить",
        btn_edit: "Редактировать",
        btn_del: "Удалить",
        btn_go_back: "Назад",
        btn_cancel: "Отмена",
        btn_save: "Сохранить"
      }
    }
  };
}
