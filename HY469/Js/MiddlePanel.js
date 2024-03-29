$(document).ready(function(){

    //-----------------Notes----------------
    $('#ExitNotes').click(function(){
        $('#ExitNotesButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#MiddlePanelTakeNotes').hide();
    });

    $("#ExitNotes").mousedown(function(){
        $('#ExitNotesButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });

    $("#ExitNotes").mouseleave(function(){
        $('#ExitNotesButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

    $('#ExitNotesBtn').click(function(){
        $('#ExitNotesButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#NotesPanel').hide();
        $('#MainPanel').show();
    });

    $("#ExitNotesBtn").mousedown(function(){
        $('#ExitNotesButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });

    $("#ExitNotesBtn").mouseleave(function(){
        $('#ExitNotesButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

    //-----------------File System----------------
    $('#SettingsExitFileSystemBtn').click(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#MiddlePanelPresentationOptions').show();
        $('#MiddlePanelMoreOptionsSelectFile').hide();
    });

    $("#SettingsExitFileSystemBtn").mousedown(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });

    $("#SettingsExitFileSystemBtn").mouseleave(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

    $('#ExitFileSystemBtn').click(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#MiddlePanelMoreOptionsSelectFile').hide();
    });

    $("#ExitFileSystemBtn").mousedown(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });

    $("#ExitFileSystemBtn").mouseleave(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

    //---------------------------------------------
    $('#ExitChangePPTBtn').click(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#FileSystemPanel').hide();
        $('#MainPanel').show();
        $('#PPTFileSystemLocal').hide();
        $('#PPTFileSystemDropbox').hide();
        $('#PPTFileSystemGoogleDrive').hide();
        $('#PPTFileSystemiCloud').hide();
    });

    $("#ExitChangePPTBtn").mousedown(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });

    $("#ExitChangePPTBtn").mouseleave(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

    //-----------------Remote Users----------------
    $('#RemoteUserZikasButton').click(function(){
        $('#ParticipantOptionsNotification').show();
        $('#UserIconNoticicationButtonImg').attr('src', '../Images/Users/User_Paul.jpg'); 
        document.getElementById("RequestInfoTextNotification").innerHTML = 'Paul Zikas';
    });

    $('#RemoteUserSteveButton').click(function(){
        $('#UserIconNoticicationButtonImg').attr('src', '../Images/Users/User_Steve.jpg'); 
        document.getElementById("RequestInfoTextNotification").innerHTML = 'Steve Ens';
        $('#ParticipantOptionsNotification').show();
    });

    $('#RemoteUserStratosButton').click(function(){
        $('#UserIconNoticicationButtonImg').attr('src', '../Images/Users/User_Stratos.jpg'); 
        document.getElementById("RequestInfoTextNotification").innerHTML = 'Stratos W.';
        $('#ParticipantOptionsNotification').show();
    });

    $('#RemoteUserSallyButton').click(function(){
        $('#UserIconNoticicationButtonImg').attr('src', '../Images/Users/User_Sally.jpg'); 
        document.getElementById("RequestInfoTextNotification").innerHTML = 'Sally Fitz.';
        $('#ParticipantOptionsNotification').show();
    });
    //-----------------Settings Buttons----------------
    $('#MoreOptionsBtn').click(function(){
        $('#MiddlePanelPresentationOptions').hide();
        $('#MiddlePanelMoreOptionsParticipant').show();
    });
    
    $('#PresentationOptionsBtn').click(function(){
      $('#MiddlePanelPresentationOptions').show();
      $('#MiddlePanelMoreOptionsParticipant').hide();
    });

    //---------File System------------
    $('#LocalFileSystemBtn').click(function(){
        $('#PPTFileSystemLocal').show();
        $('#PPTFileSystemDropbox').hide();
        $('#PPTFileSystemGoogleDrive').hide();
        $('#PPTFileSystemiCloud').hide();
      });
      $('#DropBoxBtn').click(function(){
        $('#PPTFileSystemLocal').hide();
        $('#PPTFileSystemDropbox').show();
        $('#PPTFileSystemGoogleDrive').hide();
        $('#PPTFileSystemiCloud').hide();
      });
      $('#GoogleDriveBtn').click(function(){
        $('#PPTFileSystemLocal').hide();
        $('#PPTFileSystemDropbox').hide();
        $('#PPTFileSystemGoogleDrive').show();
        $('#PPTFileSystemiCloud').hide();
      });
      $('#iCloudBtn').click(function(){
        $('#PPTFileSystemLocal').hide();
        $('#PPTFileSystemDropbox').hide();
        $('#PPTFileSystemGoogleDrive').hide();
        $('#PPTFileSystemiCloud').show();
      });

});