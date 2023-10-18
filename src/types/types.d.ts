declare global {
    interface HTMLAudioElement  {
      setSinkId(sinkId: string): Promise<void>;
    }
  }

  type GradioResponse ={data: [{name:string, data: string , size?: number, is_file?:boolean, orig_name?:string},srting]}
   type Id = string | number;

 type Column = {
  id: Id;
  title: string;
};

 type Task = {
  id: Id;
  columnId: Id;
  content: string;
};
